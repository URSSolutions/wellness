class EventsController < ApplicationController
  before_action :authenticate_user!, only: [:buy, :checkout]

  def index
    @events = Event.all
  end

  def checkout
    @subscription = Subscription.new
    @event = Event.find(params.require(:id))
  end

  def buy
    if BuyEventService.perform(current_user, Event.find(params.require(:id)))
      flash[:notice] = 'Compra realizada com sucesso!'
      redirect_to '/app/'
    else
      flash[:error] = 'Não foi possível realizar compra.'
      redirect_to '/'
    end
  end
end
