// Concrete Classes
class EmailNotification {
  send(message) {
    console.log(`Enviando notificação por email: ${message}`);
  }
}

class SMSNotification {
  send(message) {
    console.log(`Enviando notificação por SMS: ${message}`);
  }
}

class DiscordNotification {
  send(message) {
    console.log(`Enviando notificação por Discord: ${message}`);
  }
}

// Usage Factory Method
class NotificationFactory {
  static types = {
    email: EmailNotification,
    sms: SMSNotification,
    discord: DiscordNotification,
  };

  static create(type) {
    const NotificationClass = this.types[type];
    return NotificationClass ? new NotificationClass() : null;
  }
}

// Client code
function main() {
  const notifications = ['email', 'sms', 'discord'];

  try {
    notifications.forEach((type) => {
      const notification = NotificationFactory.create(type);
      notification.send(`${type.toUpperCase()} Pix recebido no valor de R$100,00`);      
    });
  } catch (error) {
    console.error('Erro ao enviar notificação:', error);
  }
}

main();