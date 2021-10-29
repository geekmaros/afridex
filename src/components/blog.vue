<template>
  <section
    class="pt-24 pb-24 2xl:pt-5 pl-88px pr-101 bg-afridex-gray-50 w-full"
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
    <div class="text-black text-3xl font-bold">Lastest blog posts</div>
    <div class="my-5">
      <p class="text-gray-500 text-base">
        Tool and strategies modern teams need to help their companies grow.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-3 gap-8">
      <div v-for="(blog, idx) in blogData" :key="idx" class="flex flex-col">
        <div class="mb-8">
          <img :src="require(`@/assets/images/blog/${blog.blog_image}.png`)" alt="" class="w-full h-60" />
        </div>
        <div class="mb-3">
          <p class="text-afridex-blue text-sm font-semibold">
            {{ blog.category }}
          </p>
        </div>
        <div class="mb-3">
          <p class="text-2xl font-bold text-black">
            {{ blog.title }}
          </p>
        </div>
        <div class="mb-8">
          <p class="text-base text-gray-400">
            {{ blog.subtext }}
          </p>
        </div>
        <div class="flex items-center">
            <div class="mr-3"><img :src="require(`@/assets/images/blog/${blog.owner_image}.png`)" alt="" class="w-auto"></div>
            <div class="flex-col flex">
                <h1 class="text-base"> {{blog.owner_name}} </h1>
                <small class="text-gray-400"> 20 Jan 2022 </small>
            </div>
        </div>
      </div>
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

<style></style>
