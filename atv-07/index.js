class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(novoSaldo) {
        this.saldo = novoSaldo;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, "Conta Corrente", saldo);
        this.cartaoCredito = cartaoCredito;
        this.tipo = "Conta Corrente"; // Tipo definido como "Conta Corrente" por padrão
    }

    getCartaoCredito() {
        return this.cartaoCredito;
    }

    setCartaoCredito(novoCartaoCredito) {
        this.cartaoCredito = novoCartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Poupança", saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Universitária", saldo);
    }

    sacar(valor) {
        if (valor <= 500 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
}