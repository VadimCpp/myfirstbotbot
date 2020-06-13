class MyFirstBotApp {

    /**
     * @public
     */
    constructor() {
        console.log('');
        console.log('[MyFirstBotApp]: Create Application...');

        /**
         * @type {string}
         * @private
         */
        this._myWebsite = 'vadimcpp.ru';

        /**
         * @type {Array}
         * @private
         */
        this._botsBasedOnThisTemplate = [
            '@gdgcensorbot',
            '@events4friendsbot',
            '@gdgdevbot',
            '@horoshoposidelibot'
        ];
    }

    /**
     * Main event handler
     *
     * @param {Object} msg
     * @param {Object} bot
     * @public
     */
    handleMessage(msg, bot) {

        //
        // NOTE! view logs on your server
        //
        console.log('');
        console.log(JSON.stringify(msg));

        /**
         * @type {string}
         */
        let messageText =
            'Hello, ' + this._getName(msg) + "\n\n" +
            'This is the starter template for other bots built with <b>node-telegram-bot-api</b>. ' +
            'Visit my website ' + this._myWebsite + ' to order new bot.\n\n' +
            'Bots cooked:\n';

        for (let i = 0; i < this._botsBasedOnThisTemplate.length; i++)
            messageText += this._botsBasedOnThisTemplate[i] + ';\n';

        messageText += '\nEnjoy cooking with <a href="https://github.com/VadimCpp/myfirstbotbot">this template</a>!';

        bot.sendMessage(msg.chat.id, messageText, {                
            parse_mode: "HTML",
            disable_web_page_preview: true,                        
        });
    }

    /**
     * @param {Object} msg
     * @return {string}
     * @private
     */
    _getName(msg) {
        /**
         * @type {string}
         */
        let result = 'Без имени 👤';

        /**
         * @type {string}
         */
        let fname = msg.from.first_name;

        /**
         * @type {string}
         */
        let lname = msg.from.last_name;

        /**
         * @type {string}
         */
        let uname = msg.from.username;

        if (fname) {
            result = fname + ( lname ? ' ' + lname : '') ;    
        } else if (uname) {
            result = uname;
        }

        return result;
    }
}

module.exports = MyFirstBotApp;
