const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
}));
const galleryItem = [
    {
        images: [...images],
        title: "New Roof Installation",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum deserunt ducimus excepturi harum hic inventore itaque laboriosam minima nam neque nisi obcaecati officia possimus, praesentium quod reiciendis, repellendus sapiente sed sint sit soluta sunt unde vel velit veniam veritatis? Dolorem est eum fuga nobis porro repellendus sapiente sequi. Sequi."
    },
    {
        images: [...images],
        title: "New Roof",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum deserunt ducimus excepturi harum hic inventore itaque laboriosam minima nam neque nisi obcaecati officia possimus, praesentium quod reiciendis, repellendus sapiente sed sint sit soluta sunt unde vel velit veniam veritatis? Dolorem est eum fuga nobis porro repellendus sapiente sequi. Sequi.",
    },
    {
        images: [...images],
        title: "New Roof Installation",
        descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum deserunt ducimus excepturi harum hic inventore itaque laboriosam minima nam neque nisi obcaecati officia possimus, praesentium quod reiciendis, repellendus sapiente sed sint sit soluta sunt unde vel velit veniam veritatis? Dolorem est eum fuga nobis porro repellendus sapiente sequi. Sequi."
    }
]
export default galleryItem
