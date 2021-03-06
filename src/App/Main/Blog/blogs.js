
const blogs = [
    {
        id:1,
        name:"Rebel Divi Coaching Theme",
        category: "Our latest",
        description:"You are a Rebel and need a website that stands out from the rest. A dark, moody, chic bohemian inspired Divi Child Theme. The Rebel Divi Theme is guaranteed to blow your website visitors away with her unique styling and bold layout, softly complimented with a feminine script font. Why be average, when you can stand out from the crowd?",
        image:"images/divitheme-rebel-480x299.png",
        fullDesc:"<div class='red_title_item'> OUR COLLECTION OF FEMININE DIVI CHILD THEMES & DIVI BUILDER LAYOUTS </div> <div class='text'> Easy DIY Divi child themes for small business owners</div> <div class='text_item'> Getting a business website online has never been easier, nor more essential . A combination of WordPress, Divi and a Divi Child Theme is the answer to you having your dream website. We design high end Divi child themes  for the small business entrepreneur, the coaching guru, the creative blogger – you name it we will design it.Install a divi child theme on your domain at the fraction of the cost of what hiring a web designer would normally charge for a custom website. The best part of our service, is that we love our customers and we offer stellar support if you need it.</div> <div class='blog_text'> We believe that everyone deserves a good looking website.  We are here to help you achieve your goals with your website and your business. Your success is our success. </div>",
      
    },
    {
        id:2,
        name:"Collaborate Divi Coaching Theme",
        category: "Feminine",
        description:"Beautiful, fun feminine Divi Child Theme that is elegant and classy. Coaches! You need a professional online image and what better way to schmooz your clients with  all this gorgeousness. Built for creative digital businesses who are original and are wanting to add their own personality to their website. ",
        image:"images/divi-theme-collaborate-01-480x299.png",
        fullDesc:"<div class='desc_text'>second </div>",
    },
    {
        id:3,
        category: "Best Selling",
        name:"Engage Divi Coaching Theme",
        description:"Engage those visitors of yours with this bold, striking Divi Coaching Child Theme. Engage is a Divi custom designed child theme layout for business owners, podcasters and social media entrepreneurs. One of our top selling Divi Themes- so join the crowd that oozes confidence.",
        image:"images/divi-theme-engage-480x299.png",
    },
    {
        id:4,
        category: "Panache",
        name:"Panache Divi Coaching Theme",
        description:"Panache is a feminine, premium Divi child theme created for small biz entrepreneurs and business women. This Divi child theme is largely built for coaches, copywriters, virtual assistants and social media guru’s.  We have included a free landing page layout for your online course sales pages and to market your coaching courses. ?",
        image:"images/coral-divi-child-theme.png",
      
    },
    
]

export const getBlogsObject = (array) => array.reduce((obj,blog) => ({
    ...obj,
    [blog.id]:blog
}),{})


export default blogs