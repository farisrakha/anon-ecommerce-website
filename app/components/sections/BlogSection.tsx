import { blogPosts } from '../../data/blogPosts'

export default function BlogSection() {
  return (
    <div className="py-12" style={{ borderTop: '1px solid var(--nocte-border)' }}>
      <div className="max-w-[1350px] mx-auto px-4">
        <h2
          className="text-fs-3 mb-6 text-center"
          style={{ color: 'var(--nocte-white)', fontFamily: 'var(--nocte-serif)', fontWeight: 400 }}
        >
          Latest Dispatches
        </h2>

        <div className="flex overflow-x-auto gap-5 has-scrollbar pb-2">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex-none w-[280px] overflow-hidden"
              style={{ border: '1px solid var(--nocte-border)', backgroundColor: 'var(--nocte-surface-1)' }}
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
                <span className="nocte-badge mb-3 inline-block">{post.category}</span>

                <a href="#">
                  <h3
                    className="text-fs-8 mb-2 line-clamp-2 leading-relaxed nocte-link-dim"
                    style={{ fontFamily: 'var(--nocte-sans)', fontWeight: 400 }}
                  >
                    {post.title}
                  </h3>
                </a>

                <p className="text-fs-9" style={{ color: 'var(--nocte-gray-mid)', fontFamily: 'var(--nocte-sans)' }}>
                  By <cite className="not-italic" style={{ color: 'var(--nocte-gray-light)' }}>{post.author}</cite>{' '}
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
