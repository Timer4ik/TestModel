

export default defineNuxtConfig({
    ssr: true,
    runtimeConfig: {
        public: {
            API_BASE_URL: "http://localhost:5000",
            // API_TOKEN:""
        },
    },
    imports: {
        dirs: [
            // Scan top-level modules
            'composables',
            // ... or scan modules nested one level deep with a specific name and file extension
            'composables/*/index.{ts,js,mjs,mts}',
            // ... or scan all modules within given directory
            'composables/**'
        ]
    }
})

