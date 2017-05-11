class BankAccount
  attr_reader :acct_name, :acct_number, :checking_balance, :savings_balance
  @@no_of_acct = 0
  def initialize(acct_name, acct_number, interest_rate, checking, savings)
    @acct_name= acct_name
    @acct_number = generate_acct_num
    @savings= savings
    @checking = checking
    @interest_rate= 0.1
    @@no_of_acct += 1
  end

  private
    def generate_acct_num
      rand(1000..9999)
      # @acct_number = rand.to_s[2..11]
      # self
      #return acct  number to user and should be random
    end
end
s = BankAccount.new('')

#   def checking_balance
#     #return  user's account balance
#   end
#
#   def savings_balance
#     #return user's account balance
#   end
#
#   def deposit
#     #allows user to deposit into saving/check
#   end
#
#   def withdrawals
#     #return error if insufficient funds
#   end
#
#   def acct_total
#     #display total amount
#   end
#
#   def total_acct
#     #track how many accounts bank currently has
#   end
#
#   def interest_rate
#     #private, rate at .01
#   end
#
#   def acct_info
#     #display all: users acct num, total money, checking bal, savings bal, and interest rate
#   end
# end
