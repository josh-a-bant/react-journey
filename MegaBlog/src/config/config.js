const config = {
  appwriterUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriterProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriterDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriterCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriterBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
