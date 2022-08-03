export default function InnerHTMLFunction(text: string) {
    if (!text) return {__html: text}
    const regexp = /<[^>]*script/g;
    const newText = text.replace(regexp, '')
    return {__html: newText}
}