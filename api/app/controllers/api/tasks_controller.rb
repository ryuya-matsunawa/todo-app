module Api
  class TasksController < ApplicationController
    def index
      status_list = Task.statuses.keys
      render json: { tasks: Task.all, status_list: status_list }
    end
  end
end
