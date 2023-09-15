<script>
    import ExperienceCardHorizontal from "./ExperienceCardHorizontal.svelte";
    import ExperienceCardVertical from "./ExperienceCardVertical.svelte";

    const informations = [{
        title: 'École 42 (Piscine)',
        time: '2023',
        content: 'In a one-month timespan, I and over 200 students started learning C and Shell using a different education system that is practice-based and does not include a teacher or class. We completed 10 projects. 2 weeks after final exam, the students who were accepted into the main education program were announced (including me).'
    }, {
        title: 'Web Development',
        time: '2022',
        content: 'I started creating websites and learned various web development frameworks and tools such as Bootstrap, Flowbite, Svelte, Express.js, Node.js, Passport.js, and NPM. Also I learned how to createComment REST APIs and their standards.'
    }, {
        title: 'Sakarya University of Applied Sciences',
        time: '2022',
        content: 'I am currently studying computer programming at Sakarya University of Applied Sciences. During my time here, I have gained knowledge in various areas such as website development, Python, SQL databases, computer hardwares, and Photoshop.'
    }, {
        title: 'Databases',
        time: '2022',
        content: 'Although I\'ve used databases countless times before, I learned a lot about them at this point. I gained experience in using Hibernate ORM and maintaining MySQL servers and Redis as a message broker in a production environment. Additionally, I developed a SQLite library to easily manage databases and published it on my GitHub.'
    }, {
        title: 'Docker',
        time: '2022',
        content: 'After 8 years of experience in server maintenance, I have always been excited about scalable systems. I have also learned how to build, deploy, and run Docker containers. Docker is a excellent tool, for automating and scaling servers.'
    }, {
        title: 'Linux',
        time: '2021',
        content: 'I encountered Linux systems and learned how to maintain using CLI. I really don\'t know why I used Windows servers in a production environment. Linux is great!'
    }, {
        title: 'Paid Plugin Developer',
        time: '2021',
        content: 'I started selling my software to other server owners, which gave me a lot of experience in bug-fixing. Since my codes were being tested by numerous players in live environments, I had to quickly identify and solve any issues that came up.'
    }, {
        title: 'GitHub & Git',
        time: '2021',
        content: 'I started managing my projects using Git and uploading them to GitHub. This experience taught me about version control, branching, and pull requests. I also learned about commit standards and their principles.'
    }, {
        title: 'Java',
        time: '2020',
        content: 'I started to learn Java. Although I had programming experience in different interpreted scripting languages, there were still a lot of things I didn\'t know. When I encountered IDEs and learned Object-Oriented Programming, as well as build tools such as Maven and Gradle for the first time, it blew my mind. After this point in my life, I felt like a true programmer.'
    }, {
        title: 'Şehit Mustafa Kaymakçı Science High School',
        time: '2018 - 2022',
        content: 'Welcome to me.'
    }, {
        title: 'First Program',
        time: '2016',
        content: 'I learned \'for loops\' of C# and made a few small CLI based program. Here we go.'
    }, {
        title: 'Minecraft Servers',
        time: '2014',
        content: 'I started creating Minecraft servers. I didn\'t know that this decision would have such a big impact on my life. Also I learned manage SFTP servers using File Zilla.'
    }, {
        title: 'Hello World',
        time: '2004',
        content: "I was born."
    }];

    function splitIntoGroups(arr, size) {
        let result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }

    let cards = splitIntoGroups(informations, 3);
</script>

<div class="max-w-screen-md mb-8 ml-16 lg:mb-16">
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Self Development</h2>
    <p class="text-gray-500 sm:text-xl dark:text-gray-400">My today is better than yesterday. Here is a detailed summary of my self-development from birth until now.</p>
</div>

<div class="pc-only:block">
    {#each cards as cardList}
        <ol class="items-center sm:flex mt-32">
            {#each cardList as card, i}
                <ExperienceCardHorizontal data={{
                    title: card.title,
                    time: card.time,
                    content: card.content
                }}/>
            {/each}
        </ol>
    {/each}
</div>

<div class="mobile-only:block m-5 ml-10">
    <ol class="mobile-only:inline-block relative border-l border-gray-200 dark:border-gray-700">
        {#each cards as cardList}
            {#each cardList as card}
                <ExperienceCardVertical data={{
                    title: card.title,
                    time: card.time,
                    content: card.content
                }}/>
            {/each}
        {/each}
        <ExperienceCardVertical data={{
            title: 'Hello World',
            time: '2022',
            content: "I was born."
        }}/>
    </ol>
</div>
