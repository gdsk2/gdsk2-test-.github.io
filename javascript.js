$('body').terminal({
    help: function() {
        this.echo(
                  'Commands : \n -help Help menu \n -whoami The portfolio \n -clear clearing the terminal / Ctrl+L \n -title Terminal info');
    },
    whoami: function() {
        this.echo(
                  'Hi, my name is gdsk2!   \nI\'m bug hunter & web application pentester & CTF player \nI spend most of my time Explore the world of hacking');
    },
    title: function(url) {
        return fetch(url || 'https://terminal.jcubic.pl')
            .then(r => r.text())
            .then(html => html.match(/<title>([^>]+)<\/title>/)[1]);
    }
}, {
    checkArity: false,
    completion: true,
    prompt: 'gdsk2@root:$ ~ ',
    greetings: 'Welcome type \'help\' to start'
});