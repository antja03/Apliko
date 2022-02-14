import { Routes } from "discord-api-types/v9";
import { Interaction } from "discord.js";
import { AplikoBot } from "../../Bot";
import { ModalInteraction } from "../../struct/discord/interactions/builder";

export async function InteractionReplyModal(bot: AplikoBot, interaction: Interaction, modalInteraction: ModalInteraction) {
    await bot.rest.post(
        Routes.interactionCallback(interaction.id, interaction.token),
        {
            'body': {
                'type': 9,
                'data': {
                    'type': '5',
                    ...modalInteraction.toJSON()
                }
            }
        }
    )
}