module Api
  class TasksController < ApplicationController
    def index
      render json: Task.all
    end
  end
end
