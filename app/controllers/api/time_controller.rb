class Api::TimeController < ApplicationController
  def index
    render status: :ok, json: Time.current.to_s
  end
end
