# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170525151728) do

  create_table "attendees", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "attendees", ["event_id"], name: "index_attendees_on_event_id"
  add_index "attendees", ["user_id"], name: "index_attendees_on_user_id"

  create_table "chats", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "chats", ["event_id"], name: "index_chats_on_event_id"
  add_index "chats", ["user_id"], name: "index_chats_on_user_id"

  create_table "discussions", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "event_id"
    t.string   "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "discussions", ["event_id"], name: "index_discussions_on_event_id"
  add_index "discussions", ["user_id"], name: "index_discussions_on_user_id"

  create_table "events", force: :cascade do |t|
    t.string   "name"
    t.date     "date"
    t.string   "location"
    t.string   "state"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "events", ["user_id"], name: "index_events_on_user_id"

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "location"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "state"
  end

end
