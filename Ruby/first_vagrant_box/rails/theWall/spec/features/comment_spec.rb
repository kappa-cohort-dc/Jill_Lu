require 'rails_helper'
feature 'user creates a comment' do
  before(:each) do
    visit '/'
    fill_in 'username', with: 'harrypotter'
    click_button 'Sign In'
  end
  scenario "successfully creates a comment" do
    fill_in "content", with: "This is a test comment"
    click_button 'Post a Comment'
    expect(page).to have_content "This is a test comment"
    expect(current_path).to eq('/comments')
  end
  scenario 'unsuccessfully if content is left blank' do
    fill_in 'content', with: ''
    click_button 'Post a Comment'
    expect(current_path).to eq('/comments')
    expect(page).to have_content "Content can't be blank"

  end
  scenario 'unsuccessfully if content is less than 10 characters' do
    fill_in 'content', with: 'too short'
    click_button 'Post a Comment'
    expect(current_path).to eq('/comments')
    expect(page).to have_content 'Content is too short (minimum is 10 characters)'
  end
end
