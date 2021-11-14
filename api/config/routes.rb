Rails.application.routes.draw do
  namespace :api, format: 'json' do
    resources :tasks
  end
  resources :tasks
  root to: 'tasks#index'
end
