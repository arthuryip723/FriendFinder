json.extract! friend, :id, :name, :age
if show_review
    json.reviews friend.reviews do |review|
        json.id review.id
        json.content review.content
    end
end
