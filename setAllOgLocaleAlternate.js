const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'be9i5ty1', // ← your project ID
  dataset: 'production', // ← your dataset
  token: 'sk6NW7uqTDRSgfJvu2GwU2mWAyxXBjykaZBBJfrJY1BStuLcbuFk2ksEy9u8MRv3fuBGSFsn1GbsL31vyAvZmcVwGusM9V0biIHAPrd4kMRjTAkNcZBWoTO8DyvD1IvTQ1KH1qlQxQX1M4kdQ3ZNpJCcbrys1KpyTbxhDtdazZo5LInSyKxM', // ← generate a token with write access at https://www.sanity.io/manage/project/be9i5ty1/api
  apiVersion: '2023-10-01',
  useCdn: false,
});

const allLocales = [
  'en_US', 'en_GB', 'en_IE', 'en_IN', 'en_SG', 'en_AU', 'en_CA',
  'es_ES', 'fr_FR', 'de_DE', 'it_IT', 'pt_BR', 'ar_AE', 'ar_QA',
  'ar_SA', 'ar_AR', 'zh_CN', 'ja_JP', 'ko_KR', 'ru_RU', 'hi_IN',
  'nl_NL', 'sv_SE', 'nb_NO', 'da_DK', 'fi_FI', 'pl_PL', 'tr_TR'
];

async function run() {
  const posts = await client.fetch(`*[_type == "post"]{_id, seo}`);
  for (const post of posts) {
    await client
      .patch(post._id)
      .setIfMissing({ seo: {} })
      .set({ 'seo.ogLocaleAlternate': allLocales })
      .commit();
    console.log(`Updated post: ${post._id}`);
  }
  console.log('All posts updated!');
}

run().catch(console.error); 