// Interface/Classe base para cartões de pagamento
class PaymentCard {
  pay(amount) {
    throw new Error("Método pay deve ser implementado pela classe filha");
  }
}

// Classes concretas
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

// Factory Method - Classe abstrata
class PaymentFactory {
  static createPayment(type) {
    throw new Error("Método createPayment deve ser implementado pela classe filha");
  }
}

// Factory concreta
class CardPaymentFactory extends PaymentFactory {
  static createPayment(type) {
    switch (type.toLowerCase()) {
      case "debit":
      case "debit card":
        return new DebitCard();
      case "credit":
      case "credit card":
        return new CreditCard();
      default:
        throw new Error(`Tipo de pagamento não suportado: ${type}`);
    }
  }
}

// Código do cliente
function main() {
  const paymentTypes = ["credit card", "debit card"];
  const amount = "R$ 500,00";

  paymentTypes.forEach(type => {
    try {
      // O cliente não precisa conhecer as classes concretas
      const paymentMethod = CardPaymentFactory.createPayment(type);
      paymentMethod.pay(amount);
    } catch (error) {
      console.error(`Erro: ${error.message}`);
    }
  });
}

main();