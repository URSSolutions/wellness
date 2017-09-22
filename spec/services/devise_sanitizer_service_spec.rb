require "rails_helper"

RSpec.describe DeviseSanitizerService, type: :service do
  subject { DeviseSanitizerService }

  let(:params) { double(permit: permitted_params) }
  let(:permitted_params) { double() }

  describe '#perform' do
    context 'when resouce class is nil' do
      it 'return nil' do
        expect(subject.perform(params, nil)).to eq(nil)
      end
    end

    context 'when resouce class is User'do
      it 'return the double' do
        expect(subject.perform(params, User)).to eq(permitted_params)
      end
    end
  end
end
