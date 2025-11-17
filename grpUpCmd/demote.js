module.exports = {
  event: 'demote',
  handle: async ({ api, event }) => {
    const demotedMembers = event.participants;
    
    for (const members of demotedMembers) {
        const member = members.phoneNumber
      await api.sendMessage(event.id, {
        text: `😢 @${member.split('@')[0]} has been demoted. Better luck next time!`,
        mentions: [member]
      });
    }
  }
};
