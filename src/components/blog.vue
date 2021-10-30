<template>
  <section
    class="
      pt-24
      pb-24
      2xl:pt-5
      px-10
      md:px-0 md:pl-88px md:pr-101
      bg-afridex-gray-50
      w-full
    "
  >
    <div class="flex my-3 justify-between items-center">
      <div class="text-base font-semibold text-afridex-blue">Our Blog</div>
      <div>
        <button
          class="
            w-auto
            p-2
            text-center text-white
            rounded-md
            text-base
            bg-afridex-blue
          "
        >
          View all post
        </button>
      </div>
    </div>
    <div class="text-black text-3xl font-bold mt-5">Lastest blog posts</div>
    <div class="my-5">
      <p class="text-gray-500 text-base">
        Tool and strategies modern teams need to help their companies grow.
      </p>
    </div>

    <div class="mt-16 grid md:grid-cols-3 gap-8 gap-y-20 md:gap-y-0">
      <a href="#"
        v-for="(blog, idx) in blogData"
        :key="idx"
        class="flex blog-card group flex-col"
      >
        <div class="mb-8 overflow-hidden">
          <img
            :src="require(`@/assets/images/blog/${blog.blog_image}.png`)"
            alt=""
            class="w-full blog-image group-hover:border-4px h-60"
          />
        </div>
        <div class="mb-3">
          <p class="text-afridex-blue text-sm font-semibold">
            {{ blog.category }}
          </p>
        </div>
        <div class="mb-3">
          <p
            class="text-2xl font-bold text-black group-hover:text-afridex-blue"
          >
            {{ blog.title }}
          </p>
        </div>
        <div class="mb-8">
          <p class="text-base text-gray-400">
            {{ blog.subtext }}
          </p>
        </div>
        <div class="flex items-center">
          <div class="mr-3">
            <img
              :src="require(`@/assets/images/blog/${blog.owner_image}.png`)"
              alt=""
              class="w-auto"
            />
          </div>
          <div class="flex-col flex">
            <h1 class="text-base">{{ blog.owner_name }}</h1>
            <small class="text-gray-400"> 20 Jan 2022 </small>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blogData: [
        {
          blog_image: 1,
          category: "Design",
          title: "UX review presentations",
          subtext:
            "How do you create compelling presentations that wow your colleagues and impress your managers?",
          owner_image: "1_1",
          owner_name: "Usman Abiola",
        },
        {
          blog_image: 2,
          category: "Product",
          title: "Migrating to Linear 101",
          subtext:
            "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
          owner_image: "2_2",
          owner_name: "Usman Abiola",
        },
        {
          blog_image: 3,
          category: "Software Engineering",
          title: "Building your API Stack",
          subtext:
            "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
          owner_image: "3_3",
          owner_name: "Usman Abiola",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
section {
  .group {
    cursor: pointer;
    &:hover {
      .blog-image {
        transform: scale(1.1);
        transition: all .85s ease-in-out;
      }
    }
  }
}
</style>
