SELECT u.full_name AS organizer_name, e.status, COUNT(e.event_id) AS event_count
FROM Users u
JOIN Events e ON u.user_id = e.organizer_id
GROUP BY u.user_id, e.status, u.full_name
ORDER BY organizer_name;
