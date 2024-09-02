<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" style="min-height: 390px" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 min-h-350px p-8" style=""><div id="cta-inner-container" class="max-w-screen-xl mx-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8" style="" data-mf-new="true"><div id="cta-content" class="max-w-screen-sm mx-auto text-center"><div id="cta-title-container" class="flex mb-4"><h2 id="cta-title" class="flex-1 text-3xl font-extrabold leading-tight tracking-tight text-white">
                        Delicious Meals, Delivered to Your Doorstep's</h2></div> <div id="cta-subtitle-container" class="flex mb-6"><p id="cta-subtitle" class="flex-1 font-light text-pink-100 md:text-lg">
                        Enjoy restaurant-quality food from the comfort of your home. Order now and experience convenience at its finest!
                    </p></div> <div id="cta-button-container" class="flex"><a id="cta-button" href="#" class="flex-1 text-purple-800 bg-pink-200 hover:bg-pink-300 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">
                        Start Your Order
                    </a></div></div></div></section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
