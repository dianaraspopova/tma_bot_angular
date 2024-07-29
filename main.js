import { Telegraf, Markup, Context } from 'telegraf'
import { message } from 'telegraf/filters';

const token = '6800562449:AAG86BkFf_i6T27JWDeH3iBegvkKMPadBjw'
const webAppUrl = 'https://tma-tg-app-angular.web.app'

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
    ctx.reply('Нажмите кнопку нижу, чтобы запустить приложение',
Markup.keyboard([
    Markup.button.webApp('Написать нам', webAppUrl + '/feedback' ),
     ])
    )   
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json();
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message');
})

bot.launch()
