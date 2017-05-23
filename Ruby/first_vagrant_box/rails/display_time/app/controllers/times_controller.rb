class TimesController < ApplicationController
  def main
    @time= Time.now
    render 'times/main'
  end
end
