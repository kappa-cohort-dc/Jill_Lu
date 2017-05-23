require 'rails_helper'
feature 'user creates a message' do
  before(:each) do
    visit '/'
    fill_in 'username', with: 'harrypotter'
    click_button 'Sign In'
  end
  scenario "successfully creates a message" do
    fill_in "content", with: "This is a test message"
    click_button 'Post a Message'
    expect(page).to have_content "This is a test message"
    expect(current_path).to eq('/messages')
  end
  scenario 'unsuccessfully if content is left blank' do
    fill_in 'content', with: ''
    click_button 'Post a Message'
    expect(current_path).to eq('/messages')
    expect(page).to have_content "Content can't be blank"

  end
  scenario 'unsuccessfully if content is less than 10 characters' do
    fill_in 'content', with: 'too short'
    click_button 'Post a Message'
    expect(current_path).to eq('/messages')
    expect(page).to have_content 'Content is too short (minimum is 10 characters)'
  end
end
