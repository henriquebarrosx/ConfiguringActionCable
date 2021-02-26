Rails.application.routes.draw do
  root 'message#index'
  get 'message/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
