SELECT e.event_id, e.title, COUNT(r.registration_id) AS registrations
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
GROUP BY e.event_id, e.title
ORDER BY registrations DESC
LIMIT 3;
