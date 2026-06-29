import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Intercept client.fetch to inject ImageKit links for JM Visa and Eazy Visa
const originalFetch = client.fetch.bind(client);

client.fetch = async function (query: any, params?: any, options?: any) {
  const result = await originalFetch(query, params, options);

  const modifyItem = (item: any) => {
    if (item && typeof item === 'object') {
      const title = item.title || item.projectTitle;
      if (title && (title.toLowerCase() === 'jm visa' || title.toLowerCase() === 'jm visas' || title.toLowerCase() === 'jm visa services')) {
        return {
          ...item,
          thumbnailImage: { _ref: 'custom-jm-visa-image' },
          mainImage: { _ref: 'custom-jm-visa-image' },
          projectSummaryImage: {
            useExternalImage: true,
            externalImage: 'https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/portfolio/JM%20Visa.png?updatedAt=1782714093330',
            alt: 'JM Visa Services'
          }
        };
      }
      if (title && (title.toLowerCase() === 'eazy visas' || title.toLowerCase() === 'eazy visa')) {
        return {
          ...item,
          thumbnailImage: { _ref: 'custom-eazy-visa-image' },
          mainImage: { _ref: 'custom-eazy-visa-image' },
          projectSummaryImage: {
            useExternalImage: true,
            externalImage: 'https://ik.imagekit.io/Aneeverse/AV_creatives_new/AV_Image/portfolio/V1_Eazy%20Visa.png?updatedAt=1782714093667',
            alt: 'Eazy Visas'
          }
        };
      }
    }
    return item;
  };

  if (Array.isArray(result)) {
    return result.map(modifyItem);
  } else if (result && typeof result === 'object') {
    return modifyItem(result);
  }

  return result;
};
