"use client";

const LINKS = [
  { title: "Company",
    items: [
      { name : "About Us", href: '#about-us' }, 
      { name : "Timeline", href: '/timeline' }
    ],
  },
  { title: "Pages",
    items: [
      { name : "Login", href: '/userLogin' },
      { name : "Register", href: '/userCreation' },
    ],
  },
  { title: "Legal",
    items: [
      { name : "Terms", href: '/terms' },
      { name : "Privacy", href: '/privacy' },
    ],
  },
];

export function Footer() {
    return (
        <footer className="mt-10 px-8 pt-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
              <a target="_blank"
                className="mb-6 text-2xl font-bold text-white-900"
              > Space Tokens
              </a>
              <div className="grid grid-cols-3 justify-between gap-4">
                {LINKS.map(({ title, items }) => (
                  <ul key={title}>
                    <h6 className="mb-4 text-lg font-semibold text-blue-gray-900">
                      {title}
                    </h6>
                    {items.map((item) => (
                      <li key={item.name}>
                        <a href={item.href}
                          className="block py-1 text-sm font-normal text-gray-700 transition-colors hover:text-gray-900" >
                        {item.name}
                    </a>
                    </li> ))}
                  </ul>))}
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer;
