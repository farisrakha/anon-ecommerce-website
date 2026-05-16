import { blogPosts } from '../../data/blogPosts'

export default function BlogSection() {
  return (
    <div className="py-12 border-t border-cultured">
      <div className="max-w-[1350px] mx-auto px-4">
        <h2 className="text-fs-3 font-semibold text-eerie-black mb-6 text-center">Latest Blog</h2>

        <div className="flex overflow-x-auto gap-5 has-scrollbar pb-2">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex-none w-[280px] border border-cultured rounded-md-custom overflow-hidden hover:shadow-md transition-shadow"
            >
              <a href="#" className="block overflow-hidden aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  width={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>

              <div className="p-4">
                <a
                  href="#"
                  className="inline-block bg-salmon-pink/10 text-salmon-pink text-fs-10 font-semibold px-3 py-1 rounded-full mb-2 capitalize"
                >
                  {post.category}
                </a>

                <a href="#">
                  <h3 className="text-fs-8 font-semibold text-eerie-black mb-2 line-clamp-2 hover:text-salmon-pink transition-colors leading-relaxed">
                    {post.title}
                  </h3>
                </a>

                <p className="text-fs-9 text-sonic-silver">
                  By <cite className="not-italic font-medium text-eerie-black">{post.author}</cite>{' '}
                  / <time dateTime={post.dateIso}>{post.dateDisplay}</time>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
