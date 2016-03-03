import generateCommonAuthentication from './generateCommonAuthentication';
import generateLocalAuthentication from './generateLocalAuthentication';
import generateFacebookAuthentication from './generateFacebookAuthentication';
import generateGoogleAuthentication from './generateGoogleAuthentication';
import generateTwitterAuthentication from './generateTwitterAuthentication';

async function generateAuthentication(params) {
  if (params.authentication && params.authentication.length) {
    await generateCommonAuthentication(params);

    if (params.authentication.includes('email')) {
      await generateLocalAuthentication(params);
    }

    if (params.authentication.includes('facebook')) {
      await generateFacebookAuthentication(params);
    }

    if (params.authentication.includes('google')) {
      await generateGoogleAuthentication(params);
    }

    if (params.authentication.includes('twitter')) {
      await generateTwitterAuthentication(params);
    }
  }
}

export default generateAuthentication;
