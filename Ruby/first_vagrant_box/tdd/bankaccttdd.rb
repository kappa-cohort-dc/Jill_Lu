require_relative 'bankacct'
RSpec.describe BankAccount do
  before(:each) do
    @bankaccount1 = BankAccount.new(1000, 500)

  end

  it "has function that allows users to withdraw" do
    @bankaccount1.withdrawals("saving", 500)
    expect(@bankaccount1.savings_balance).to eq(0)
  end

  it "error if overdraft" do
    expect{@bankaccount1.withdrawals("saving", 800)}.to raise_error("insufficient funds")
  end

  it "deny user total number of bank account" do
    expect{@bankaccount1.no_of_acct}.to raise_error(NoMethodError)
  end

  it "user cannot manipulate interate rate" do
    expect{@bankaccount1.interest_rate}.to raise_error(NoMethodError)
  end

  it "has a getter method for checking account balance attribute" do
    expect(@bankaccount1.show_balances).to eq("Checking balance: 1000\nSavings balance: 500\nTotal balance: 1500")
  end

end
