<template>
    <container class="bg-gray-100 w-screen"> <!--MainContent-->
        <div class="w-full items-center flex flex-wrap"> <!--Content-->
            <div class="w-full md:w-7/12 2xl:w-6/12"> <!--Text-->
                <div class="flex items-center py-4 text-center"><!--Header-->
                        <h1 class="text-2xl md:text-4xl font-semibold mb-10 ml-8">
                            Our services place a strong impact
                        </h1>
                </div> <!--Header-->

                <div class="mt-2 mx-6 h-6 relative w-auto rounded-sm overflow-hidden"> <!--MainSkill-->
                    <div class=" w-full h-full bg-gray-600 absolute flex justify-end">
                        <span class="text-gray-100 mx-4 font-semibold">80%</span>
                    </div> <!--SkillBG-->
                    <div class=" h-full bg-yellow-500 sm:bg-yellow-500 absolute" style="width:80%">
                        <span class="text-gray-100 mx-4 font-semibold">Skill 1</span><!--SkillProgress-->
                    </div> <!--SkillProgress-->
                </div> <!--MainSkill-->

                <div class="mt-2 mx-6 h-6 relative w-auto rounded-sm overflow-hidden"> <!--MainSkill-->
                    <div class=" w-full h-full bg-gray-600 absolute flex justify-end">
                        <span class="text-gray-100 mx-4 font-semibold">60%</span>
                    </div> <!--SkillBG-->
                    <div class=" h-full bg-yellow-500 sm:bg-yellow-500 absolute" style="width:60%">
                        <span class="text-gray-100 mx-4 font-semibold">Skill 2</span><!--SkillProgress-->
                    </div> <!--SkillProgress-->
                </div> <!--MainSkill-->

                <div class="mt-2 mx-6 h-6 relative w-auto rounded-sm overflow-hidden"> <!--MainSkill-->
                    <div class=" w-full h-full bg-gray-600 absolute flex justify-end">
                        <span class="text-gray-100 mx-4 font-semibold">40%</span>
                        </div> <!--SkillBG-->
                    <div class=" h-full bg-yellow-500 sm:bg-yellow-500 absolute" style="width:40%">
                        <span class="text-gray-100 mx-4 font-semibold">Skill 3</span><!--SkillProgress-->
                    </div> <!--SkillProgress-->
                </div> <!--MainSkill-->

                <div class="mt-2 mx-6 h-6 relative w-auto rounded-sm overflow-hidden"> <!--MainSkill-->
                    <div class="flex w-full h-full bg-gray-600 absolute justify-end">
                        <span class="text-gray-100 mx-4 font-semibold ">20%</span>                        
                    </div> <!--SkillBG-->
                    <div class=" h-full bg-yellow-500 sm:bg-yellow-500 absolute" style="width:20%">
                        <span class="text-gray-100 mx-4 font-semibold">Skill 4</span><!--SkillProgress-->
                    </div> <!--SkillProgress-->
                </div> <!--MainSkill-->
            </div> <!--Text-->       

            <div class="w-full md:w-5/12 2xl:w-6/12 mt-10"> <!--Image-->
                <img alt="" class="max-w-full 2xl:mx-auto" src="~/static/img/about01.jpg">
            </div><!--Image-->
        </div> <!--Content-->
    </container> <!--MainContent-->

</template>