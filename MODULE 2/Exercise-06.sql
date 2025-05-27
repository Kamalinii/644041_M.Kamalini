SELECT e.event_id, e.title,
       SUM(resource_type = 'pdf') AS pdf_count,
       SUM(resource_type = 'image') AS image_count,
       SUM(resource_type = 'link') AS link_count
FROM Events e
LEFT JOIN Resources r ON e.event_id = r.event_id
GROUP BY e.event_id, e.title;
