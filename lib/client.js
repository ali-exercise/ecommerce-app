import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId : '',
    dataset : '',
    apiVersion : '' ,
    useCdn : true,
    token : process.env.NEXT_PUBLIC_SANITY_TOKEN
})