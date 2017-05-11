class BankAccount
  attr_reader :checking_balance, :savings_balance, :acct_number
  @@no_of_acct = 0

  def initialize(i_checking, i_saving)
    puts "successfully created a new account"
    @acct_number = generate_acct_num
    @checking_balance = i_checking
    @savings_balance= i_saving
    @interest_rate = 0.01
    @@no_of_acct += 1
  end

  def self.total_acct
    puts @@no_of_acct
  end

  def show_balances
    puts "Checking balance: #{@checking_balance}"
    puts "Savings balance: #{@savings_balance}"
    puts "Total balance: #{@checking_balance + @savings_balance}"
  end

  def account_info
    puts "Account number: #{@acct_number}"
    puts "Interest Rate: #{@interest_rate}"
    show_balances
  end

  def deposit(account, amount)
    if account.downcase == "checking"
      @checking_balance += amount
      puts "successfully deposit into checking account"
    elsif account.downcase == "savings"
      @savings_balance += amount
      puts "succesfully deposit into savings account"
    else
      "Please specify which account (checking or savings)"
    end
  end

  def withdrawals(account, amount)
    if account.downcase == "checking"
      if amount> @checking_balance
        puts "insufficient funds"
      else
        @checking_balance -= amount
      end
    elsif amount.downcase=="saving"
      if amount> @savings_balance
        puts "insufficient funds"
      else
        @savings_balance -= amount
      end
    else
      puts "please specify which account (checking or savings)"
    end
  end

  private
    def generate_acct_num
      rand(1000..9999)
    end
end

monies= BankAccount.new(1000, 100)
dollas= BankAccount.new(100, 1000)
pennies= BankAccount.new(5, 5)

BankAccount.total_acct
# monies.withdrawals('checking', 1000)
# monies.show_balances
