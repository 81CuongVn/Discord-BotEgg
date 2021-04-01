// Variables
const unavailableGuilds = [];

// when a server has become unavailable
module.exports = async (bot, guild) => {
	// For debugging
	if (bot.config.debug) bot.logger.debug(`Guild: ${guild.name} has become unavailable.`);

	// only show error once an hour
	if (unavailableGuilds.includes(guild.id)) {
		// remove guild from array after an error
		setTimeout(function() {
			unavailableGuilds.splice(unavailableGuilds.indexOf(guild.id), 1);
		}, 3600000);
	} else {
		bot.logger.log(`[GUILD UNAVAILABLE] ${guild.name} (${guild.id}).`);
		unavailableGuilds.push(guild.id);
	}
};
