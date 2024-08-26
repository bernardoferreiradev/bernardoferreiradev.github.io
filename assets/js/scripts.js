document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('user-input');
    const userPerm = document.querySelector('.user-perm');

    function handleCommand(command) {
        let response = '';
        switch (command.trim().toLowerCase()) {
            case 'help':
                response = `
                <p>Available commands:</p>
                <p>HELP: Displays this help message</p>
                <p>WHOAMI: Information about me</p>
                <p>CONTACT: Contact details</p>
                <p>EDUCATION: Where did I study and dates</p>
                <p>SKILLS: Technologies I've worked with</p>
                <p>NEOFETCH: Inspired in the 'neofetch' command</p>
                <p>CLEAR: Clears the terminal output</p>
                `;
                break;
            case 'whoami':
                response = 'My name is Bernardo Ferreira. I am from Porto, Portugal, and I have always been fascinated by computers and their logic. <br> I love programming and have a deep passion for cybersecurity and the world of networking. <br> My goal is to be recognized as a professional and to merge my interests into a successful career.'
                break;
            case 'contact':
                response = 'You can reach me at either bernardodferreira@outlook.com or linkedin.com/in/bernardodferreira/';
                break;
            case 'education':
                response = 'I study Computer Science at "Universidade Lusófona do Porto" since 2022';
                break;
            case 'skills':
                response = 'So far I have worked with Python, Java (JSP / JDBC), MySQL and C. <br> I`ve been also learning self-teaching cibersecurity concepts and methologies. <br> I enjoy solving Capture The Flag (CTF) challenges.';
                break;
            case 'neofetch':
                response = `
    .########.<br>.##.....## bernardodferreira@outlook.com <br>.########.<br>.##.....##<br>.##.....##          linkedin.com/in/bernardodferreira/<br>    .########.<br>
                    `;
                break;
            case 'clear':
                clearPrompt();
                return '';
            default:
                response = 'Command not recognized. Type HELP for a list of commands.';
        }
        return response;
    }

    function displayResponse(command, response) {
        const div = document.createElement('div');
        div.className = 'response';
        div.innerHTML = `
            <p><span class="command">user@visitor:~$</span> ${command}</p>
            <p>${response}</p>
        `;
        userPerm.insertAdjacentElement('beforebegin', div);
    }

    function displayCtrlC() {
        const div = document.createElement('div');
        div.className = 'response';
        div.innerHTML = `
            <p><span class="command">user@visitor:~$</span> ^C</p>
        `;
        userPerm.insertAdjacentElement('beforebegin', div);
    }

    function clearPrompt() {
        const responses = document.querySelectorAll('.response');
        responses.forEach(response => response.remove());

        userPerm.querySelector('p').textContent = 'user@visitor:~$ ';
        input.value = '';
    }

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

            const command = input.value.trim();
            if (command) {
                const response = handleCommand(command);
                if (response) {
                    displayResponse(command, response);
                }

                input.value = '';

                userPerm.querySelector('p').textContent = 'user@visitor:~$ ';
            }
        } else if (event.ctrlKey && event.key === 'c') {
            event.preventDefault();
            displayCtrlC();
            input.value = '';
            userPerm.querySelector('p').textContent = 'user@visitor:~$ ';
        }
    });
});
