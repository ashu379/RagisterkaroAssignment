import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const blogs = [
    {
      id: 1,
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      tag: "Today",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
      image: "https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGhDAqlFHdNx9OTYmn~YuEo2N9Yj4oYG9sHeds3fLvWEfE1f7sroZqxjZHoKuK1gxuapiL6~fplM52dxtC7pFHuvrCH~7jL-1bEdu6PLsWvnjwnof32T9Y0nPIOM2dK0zQdyFGbVy9XqVvGq47IOYNUdH0USHpMALKwnaX-7rvjf2VwEwY~cIdN4gvjKPCcqFdr1ZOkZW09jcLBkl4RY336qYol-RhYs~RhZt3GmZGcVanQegCurtU8Mur~~RHu-wmbIhdqWah4znLTmyPyErutelIy8~S5745qypbyLyUwJ~DnQBDqHYvynaClXn64stLr-ddq05UV8QR~XL4gVsg__",
    },
    {
      id: 2,
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      tag: "",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
      image: "https://s3-alpha-sig.figma.com/img/908f/6e6d/adefff9c6fad99774e0aa7808b2270ab?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mxqNKgRpXToYRoSbTEl2-A33v1Ov9uViNMsW-6Zvl7IH9qSwJGgMjMgvU6e4H166BGIZZQALi7f3auqY-TYLbtqcXa7s6l7wGkBlcqqmp6wpe2yJEXCORgXmDnWEqPJxqCeRHM74n3cSlC10JCksgTgoIc6zGzdaWOH7fM5F72F1okxSAaI7bi4jqTr-k6ypToz3TiEq4qhqbNdYzmZy~GIxz0vigbe0pMXywowCAELH3GTwPXcDyNVQkUN7YYXH4yjRRvP7H5D3DD98SRbH4S2DYwMa7-IO8PqyMzp2LrZFucEjys-MDHVJfKq73zG-kUMf7MRJF~NnZYrG7A97lA__",
    },
    {
      id: 3,
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      tag: "",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
      image: "https://s3-alpha-sig.figma.com/img/29a7/5c7f/e7dda523e77516da100b1a88dbaecb3c?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FGhDAqlFHdNx9OTYmn~YuEo2N9Yj4oYG9sHeds3fLvWEfE1f7sroZqxjZHoKuK1gxuapiL6~fplM52dxtC7pFHuvrCH~7jL-1bEdu6PLsWvnjwnof32T9Y0nPIOM2dK0zQdyFGbVy9XqVvGq47IOYNUdH0USHpMALKwnaX-7rvjf2VwEwY~cIdN4gvjKPCcqFdr1ZOkZW09jcLBkl4RY336qYol-RhYs~RhZt3GmZGcVanQegCurtU8Mur~~RHu-wmbIhdqWah4znLTmyPyErutelIy8~S5745qypbyLyUwJ~DnQBDqHYvynaClXn64stLr-ddq05UV8QR~XL4gVsg__",
    },
    {
      id: 4,
      author: "Karan Kumar",
      date: "1 Jan 2023",
      tag: "",
      title: "Scale-Up Company Offer",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"],
      image: "https://s3-alpha-sig.figma.com/img/950f/4305/76ceafadb9f758a56d19a086f7505a80?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nm74i-cGyYu8ZaFU99f1kc75I5b0XjDB7AnhlytnGLRAyAi25hJ4Z2Ok0Vm2z~u-l1N942l3xbda3TdOJJYQrQFNo5dNA0JvwJHM2AoOVgFTskRhPVn6zpZQMsOKByKvdECXfiv58gFJHLgjtgE5k~f77fJmX2p7CDdC4GhaSo0vOqTa9FktE8xqdkqo7LyvcOtAeeR-mhOi2LUwef0Ax-acxGujB7w4UBLpOAZ8wsvYTzd8FvFj5FuioXJ7jHsSL7AEiFzidcdr8yKXT1tbrXnD4VImzjNGpuXXDcel-rHGyvzAwK6YnpBu3m9AjC1rGZZPR8L4v4XQJbgwAsoyjw__",
    },
    {
      id: 5,
      author: "Richa Singh",
      date: "1 Jan 2023",
      tag: "",
      title: "Scale-Up Company Offer",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "News", "Audit"],
      image: "https://s3-alpha-sig.figma.com/img/1155/4089/6b913ddf85158d3f3246fba7da982400?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k211o3vwxYOLc0OLGJaeuZqhf2W9OI13E2rJR7wqzZQ2Q~FzgdwVgC4Stvb8hGSAWbxSom7CM1b7lx8z-zH6jPnBU5-EuHL3~zHTLdaJBJFxhM4x~YRhWzezyOBqdLknKds9hexQK7-~cDiTbXd0jRsLzySVUxjJ9SAUiOzDyHxQ4nKjd87rQHGwAx-7x7IHRs-yh-hVcbncbk3dogw5dfO~T~zbWyHCiMNCsjTNT9CSIeuU1aj2OYGa65T1j7yDYFv4MUt-dK7KUoRKsGL52y2HhiaXYrevx~cQY8HpeUVdu2~3qAD05pGt9OncXREx1Mfo-Me4NEzJ2W9yo~Fw4w__",
    },
    {
      id: 6,
      author: "Miss Nora",
      date: "1 Jan 2023",
      tag: "",
      title: "Scale-Up Company Offer",
      description:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"],
      image: "https://s3-alpha-sig.figma.com/img/b86d/a4b5/ab8c0e971321e0daafdbc3bc3adffb48?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U2u4mD6neBFruO85Cq7FnP-tQC2CIjiTzzGYBCyQ7cCGIRk9VuT1vXub1PP4SWT2QKUCrq~hguezaTzzAMODGYusKMGvrK8fZQ3xs3aJcm5VDZwqoMpH8BiXJ4vKTc7B7YageG-Ky9MVzlGNNYDOKhROMOz6HUxL4RNVyHMouXZmhAZA2bBnTB8UGf8nMqdvYnlzNYCB-mR--pRiwmI4pSixVuPoJ0bflcPqX3fc3KfqWUjwB-cOLluHos769jHTt8w3r~qs4h50GI4-TKl~YS7Bmn7XM3Ye96gTH9iEANTxWMXqFxjLsRdIRRxbkLRQnC04tQN5W6zWrj6AundEgg__",
    },
  ];

const Blogs = () => {
  return (
   <>
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h4 className="text-sm text-center text-yellow-700 uppercase font-medium mb-2">
          Explore Our Blogs
        </h4>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Accelerate Digital Transformation
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 text-sm">
                  {blog.author} • {blog.date} {blog.tag && `• ${blog.tag}`}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 flex justify-between mt-2">
                  {blog.title} <span >&#x2197;</span>
                </h3>
                <p className="text-gray-700 mt-2">{blog.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-[3rem] flex justify-center">
              <button className="bg-[#1C4670] hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-semibold flex items-center justify-center gap-2">
                Show more blogs <FaChevronRight />
              </button>
            </div>
    </section>
   </>
  )
}

export default Blogs