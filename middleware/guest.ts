export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.client) {
        if (localStorage.getItem('token')) {
            // console.log(localStorage.getItem('token'))
            // return location.href = (to.query.redirect as string) ?? '/admin/posts'
            return await navigateTo(to.query.redirect as string || '/admin/posts')
        }
    }
    return
})