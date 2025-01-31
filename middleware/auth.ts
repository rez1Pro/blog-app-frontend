export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.client) {
        if (localStorage.getItem('token') == null) {
            return navigateTo({
                name: 'login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    }
    // On server-side, allow the initial render to proceed
    return;
})
