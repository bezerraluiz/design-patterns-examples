// Base Class
class PaymentCard {
  pay(amount) {
    throw new Error("Método pay deve ser implementado pela classe filha");
  }
}

// Concrete Classes
class DebitCard extends PaymentCard {
  pay(amount) {
    console.log(`Pagando com cartão de débito no valor de ${amount}`);
  }
}

class CreditCard extends PaymentCard {
  pay(amount) {
    console.log(`Pagando com cartão de crédito no valor de ${amount}`);
  }
}

// Factory Method
class PaymentFactory {
  static types = {
    debitCard: DebitCard,
    creditCard: CreditCard,
  };

  static create(type) {
    const NotificationClass = this.types[type];
    return NotificationClass ? new NotificationClass() : null;
  }
}

// Código do cliente
function main() {
  const paymentTypes = ["credit card", "debit card"];
  const amount = "R$ 500,00";

  paymentTypes.forEach(type => {
    try {
      // O cliente não precisa conhecer as classes concretas
      const paymentMethod = PaymentFactory.create(type);
      paymentMethod.pay(amount);
    } catch (error) {
      console.error(`Erro: ${error.message}`);
    }
  });
}

main();