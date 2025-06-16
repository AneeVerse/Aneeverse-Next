import { definePlugin } from 'sanity';
import React from 'react';

/**
 * Sanity plugin to automatically add the main image to the body content
 * when a main image is uploaded or changed
 * 
 * @param {Object} config Configuration options
 * @param {boolean} config.autoSync Whether to automatically sync the main image (default: true)
 * @returns {import('sanity').Plugin} Sanity plugin
 */
export const mainImageBodySyncPlugin = definePlugin((config = { autoSync: true }) => {
  // Default configuration
  const pluginConfig = {
    autoSync: true,
    ...config
  };
  
  return {
    name: 'mainimage-body-sync-plugin',
    
    document: {
      // Use document actions instead of onChange
      actions: (prev, context) => {
        // Keep all existing actions
        const actions = [...prev];
        
        // Find the publish action to hook into
        const publishAction = prev.find(action => action.name === 'publish');
        
        if (publishAction && pluginConfig.autoSync) {
          // Create a wrapped publish action that syncs the image first
          const originalOnHandle = publishAction.onHandle;
          
          publishAction.onHandle = async (props) => {
            const { draft, documentId, documentType, client } = props;
            
            // Only proceed with custom logic for post documents and when a mainImage is set
            if (documentType === 'post' && (draft?.mainImage?.sanityImage?.asset?._ref || draft?.mainImage?.externalImage)) {
              try {
                const mainImage = draft.mainImage;
                const body = draft.body || [];
                
                // Check if a customImage block for this mainImage already exists
                const hasImageInBody = body.some(block =>
                  block._type === 'customImage' && (
                    mainImage.sanityImage?.asset?._ref
                      ? block.sanityImage?.asset?._ref === mainImage.sanityImage.asset._ref
                      : block.externalImage === mainImage.externalImage
                  )
                );
                
                // If not in body, add it first
                if (!hasImageInBody) {
                  console.log('Auto-syncing main image to body before publish');
                  
                  // Create customImage block
                  const imageBlock = {
                    _key: `image_${Date.now()}`,
                    _type: 'customImage',
                    // Include Sanity asset reference if present
                    ...(mainImage.sanityImage?.asset?._ref && {
                      sanityImage: {
                        _type: 'image',
                        asset: {
                          _ref: mainImage.sanityImage.asset._ref,
                          _type: 'reference'
                        },
                        alt: mainImage.alt || ''
                      }
                    }),
                    // Include external URL if present
                    ...(mainImage.externalImage && { externalImage: mainImage.externalImage }),
                    // Use top-level alt and empty caption
                    alt: mainImage.alt || '',
                    caption: ''
                  };
                  
                  // Prepend the new customImage block to body
                  const newBody = [imageBlock, ...body];
                  
                  // Commit the update
                  await client.patch(documentId).set({ body: newBody }).commit();
                  
                  console.log('Successfully synced main image before publish');
                }
              } catch (err) {
                console.error('Error syncing main image before publish:', err);
              }
            }
            
            // Continue with the original publish action
            return originalOnHandle(props);
          };
        }
        
        // Add the custom action
        const syncImageAction = {
          name: 'syncMainImageToBody',
          label: 'Sync Main Image to Body',
          title: 'Automatically add the main image to body content',
          icon: () => (
            <span role="img" aria-label="sync">
              🔄
            </span>
          ),
          onHandle: ({ draft, published, documentId, documentType, client }) => {
            // Only proceed if this is a post document
            if (documentType !== 'post') return;
            
            // Get the current document
            const document = draft || published;
            
            // Only continue if a mainImage is set
            if (!document || !(document.mainImage?.sanityImage?.asset?._ref || document.mainImage?.externalImage)) {
              console.log('No document or main image found');
              return;
            }
            
            const mainImage = document.mainImage;
            const body = document.body || [];
            
            // Check if a customImage block already exists
            const hasImageInBody = body.some(block =>
              block._type === 'customImage' && (
                mainImage.sanityImage?.asset?._ref
                  ? block.sanityImage?.asset?._ref === mainImage.sanityImage.asset._ref
                  : block.externalImage === mainImage.externalImage
              )
            );
            
            // If not in body, prepend it
            if (!hasImageInBody) {
              console.log('Adding main image to body');
              
              // Create customImage block
              const imageBlock = {
                _key: `image_${Date.now()}`,
                _type: 'customImage',
                ...(mainImage.sanityImage?.asset?._ref && {
                  sanityImage: {
                    _type: 'image',
                    asset: {
                      _ref: mainImage.sanityImage.asset._ref,
                      _type: 'reference'
                    },
                    alt: mainImage.alt || ''
                  }
                }),
                ...(mainImage.externalImage && { externalImage: mainImage.externalImage }),
                alt: mainImage.alt || '',
                caption: ''
              };
              
              // Prepend the new customImage block
              const newBody = [imageBlock, ...body];
              
              // Commit the update
              client.patch(documentId).set({ body: newBody }).commit()
                .then(() => console.log('Successfully added main image to body'))
                .catch(err => console.error('Failed to add main image to body:', err));
            } else {
              console.log('Image already in body or no main image');
            }
          }
        };
        
        // Add the custom action
        actions.push(syncImageAction);
        
        return actions;
      },
      
      // Also hook into the new document operation
      newDocumentOptions: (prev, { creationContext }) => {
        return prev;
      },
      
      // Add a field action to the mainImage field
      productionUrl: (prev, context) => {
        return prev;
      }
    },
    
    // Add components to the studio UI
    studio: {
      components: {
        form: {
          // Add a field below the main image input to show sync status
          field: {
            mainImage: (props) => {
              const { renderDefault, value, document } = props;
              
              // First render the default field component
              const field = renderDefault(props);
              
              // Don't render anything special if this isn't a post document or if there's no image
              if (document._type !== 'post' || !value?.asset?._ref) {
                return field;
              }
              
              // Check if this image is in the body
              const body = document.body || [];
              const hasImageInBody = body.some(
                block => block._type === 'image' && block.asset?._ref === value.asset._ref
              );
              
              // Render the field with additional info
              return (
                <div>
                  {field}
                  <div style={{ marginTop: '10px', padding: '8px', borderRadius: '4px', backgroundColor: hasImageInBody ? '#EBFBEE' : '#FFF4E5' }}>
                    <p style={{ margin: 0, fontSize: '14px', color: hasImageInBody ? '#0F854A' : '#664D03' }}>
                      {hasImageInBody 
                        ? '✓ This image is synchronized with your body content.' 
                        : ''}
                    </p>
                  </div>
                </div>
              );
            }
          }
        }
      }
    }
  };
}); 