import Discord from 'discord-rpc';
import { config } from './settings.js';
import 'colors';

async function Presence() {
    const client = new Discord.Client({ transport: 'ipc' });
    await Discord.register(config.id);

    if (!client) return;
    client.setActivity({
        details: config.presence.details,
        state: config.presence.state,
        startTimestamp: Date.now(),
        largeImageText: config.presence.largeImageText,
        largeImageKey: config.presence.largeImageKey,
        smallImageText: config.presence.smallImageText,
        smallImageKey: config.presence.smallImageKey,
        instance: false,
        buttons: [
            {
                label: config.presence.label,
                url: config.presence.url
            }
        ]
    });

    client.on('ready', () => {
        console.log(`[LOGS] Presence iniciada.`.cyan)
        console.log(`[LOGS] Online em ${client.user.username}#${client.user.discriminator}`.yellow)
    });

    client.login({ clientId: config.id });
};

Presence();