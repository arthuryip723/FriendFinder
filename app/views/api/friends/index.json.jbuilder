@friends. each do |friend|
    json.set! friend.id do
        json.partial! 'friend', friend: friend, show_review: false
    end
end
