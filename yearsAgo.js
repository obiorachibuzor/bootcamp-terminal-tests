export default function yearsAgo(item) {
    const date = new Date();
    return date.getFullYear() - item;
    }
