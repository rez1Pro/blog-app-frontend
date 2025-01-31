export default function useSlugify(text: string) {
    return text.toLowerCase().replace(/ /g, '-')
}